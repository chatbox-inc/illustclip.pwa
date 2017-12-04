import * as firebase from 'firebase'
import axios from 'axios'

export default({env}) => {
  if ('serviceWorker' in navigator) {
    firebase.initializeApp({messagingSenderId: env.messagingSenderId})
    const messaging = firebase.messaging()

    // ユーザが通知を許可すれば、トピックallに登録
    messaging.requestPermission()
      .then(() => {
        return messaging.getToken()
      })
      .then((token) => {
        registerToTopicAll(token, env.firebaseServerKey)  // todo ServerKey使うため、ここじゃなくてサーバサイドで処理した方がいいか検討
        notifyToTopicAll(env.firebaseServerKey) //通知検証
      })
      .catch((err) => {
        console.log(err);
      })

    // フォアグラウンドの時は通知しない
    messaging.onMessage((payload) => {
      console.log('onMessage: ', payload)
    })

    // トークンリフレッシュ時の処理
    messaging.onTokenRefresh(() => {
      messaging.getToken()
        .then((refreshedToken) => {
          registerToTopicAll(refreshedToken, env.firebaseServerKey)   // todo ServerKey使うため、ここじゃなくてサーバサイドで処理した方がいいか検討
        })
        .catch((err) => {
          console.log('Unable to retrieve refreshed token ', err);
        })
    })
  }
}

const registerToTopicAll = (token, firebaseServerKey) => {
  axios.post(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/all`, {},
    {headers: {'Authorization': `key=${firebaseServerKey}`}}
  )
}

// 通知検証用
const notifyToTopicAll = (firebaseServerKey) => {
  axios.post('https://fcm.googleapis.com/fcm/send',
    {
      "notification": {
        "title": "新しいイラストが追加されたよ",
        "body": "柴犬シリーズ！！",
        "icon": "/img/dog_shiba/01.png",
        "click_action": "https://www.illust-clip.design/"
      },
      "to": "/topics/all",
      "priority":"high"
    },
    {headers: {'Authorization': `key=${firebaseServerKey}`}}
  )
}