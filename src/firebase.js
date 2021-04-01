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
const usersAPositive = db.collection('A+')
const usersBPositive = db.collection('B+')
const usersABPositive = db.collection('AB+')
const usersOPositive = db.collection('O+')
const usersANegative = db.collection('A-')
const usersBNegative = db.collection('B-')
const usersABNegative = db.collection('AB-')
const usersONegative = db.collection('O-')

export const createUser = user => {
  if(user.bloodGroup == 'A+')
    usersAPositive.add(user)
  if(user.bloodGroup == 'B+')
    usersBPositive.add(user)
  if(user.bloodGroup == 'AB+')
    usersABPositive.add(user)
  if(user.bloodGroup == 'O+')
    usersOPositive.add(user)
  if(user.bloodGroup == 'A-')
    usersANegative.add(user)
  if(user.bloodGroup == 'B-')
    usersBNegative.add(user)
  if(user.bloodGroup == 'AB-')
    usersABNegative.add(user)
  if(user.bloodGroup == 'O-')
    usersONegative.add(user)

  return usersCollection.add(user)
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

export const useLoadUsers = (AP) => {
  const users = ref([])
  let close
  if(AP == undefined){
    close = usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'APositive'){
    close = usersAPositive.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'BPositive'){
    close = usersBPositive.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'ABPositive'){
    close = usersABPositive.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'OPositive'){
    close = usersOPositive.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'ANegative'){
    close = usersANegative.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'BNegative'){
    close = usersBNegative.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'ABNegative'){
    close = usersABNegative.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else if(AP.value == 'ONegative'){
    close = usersONegative.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  } else {
    close = usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  }
  onUnmounted(close)
  return users
}