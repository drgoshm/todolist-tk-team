//import Vue from 'vue'
//import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
//Vue.use(VueFire)
firebase.initializeApp({
 projectId: 'todo-kt-team-cda75', 
 databaseURL: 'https://todo-kt-team-cda75.firebaseio.com'
})
export default firebase.firestore()