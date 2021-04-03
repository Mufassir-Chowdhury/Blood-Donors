import firebase from 'firebase/app';
import 'firebase/firestore';
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyAwcz0hTx5VUETQfWnbOFpr6reNLv13AOs",
    authDomain: "rhythm-donation-club.firebaseapp.com",
    projectId: "rhythm-donation-club",
    storageBucket: "rhythm-donation-club.appspot.com",
    messagingSenderId: "551043565551",
    appId: "1:551043565551:web:e9b1ffb6b80205451d981a",
    measurementId: "G-ZB12335C7D"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')
const Comments = db.collection('comments')

export const createUser = user => {
  return usersCollection.add(user)
}

export const Comment = comment => {
  return Comments.add(comment)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}

export const useLoadComments = () => {
  const comments = ref([])
  const close = Comments.onSnapshot(snapshot => {
    comments.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return comments
}