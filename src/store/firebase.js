import db from './db'
import firebase from 'firebase'

let totalSnapshot = undefined;

const mutations = {
    SET_PAGE (store, page) {
        store.state.loaders.pageLoading = true
        if(totalSnapshot) {
            if(page === 1) {
                db.collection('todos').orderBy("createdAt", "desc").limit(10).get().then(querySnapshot => {
                    store.commit('FB_POP_TODOS', querySnapshot)
                    store.state.loaders.pageLoading = false
                })
                return
            }
            if((page-1)*10 > totalSnapshot.size) {
                store.commit('SET_PAGE', 0 | totalSnapshot.size / 10 + 1 )
                return
            }
            // eslint-disable-next-line
            console.log('page: ',page,(page-1)*10 , totalSnapshot.docs[(page-1)*10])
            db.collection('todos').orderBy("createdAt", "desc").startAt(totalSnapshot.docs[(page-1)*10]).limit(10).get().then(querySnapshot => {
                store.commit('FB_POP_TODOS', querySnapshot)
                store.state.loaders.pageLoading = false
            })
        } else {
            db.collection('todos').orderBy("createdAt", "desc").limit(100).get().then(querySnapshot => {
                totalSnapshot = querySnapshot;
                store.commit('FB_SET_TOTAL', querySnapshot.size)
                store.commit('SET_PAGE', page > querySnapshot.size || page < 1 ? 1 : page)
            })
        }
    },
    TASK_TOGGLE (store, task) {
        db.collection('todos').doc(task.id).set(task)
    },
    TASK_ADD (store, task) {
        task.createdAt = firebase.firestore.FieldValue.serverTimestamp()
        db.collection('todos').add(task)
        .then(function(docRef) {
            task.id = docRef.id
            // eslint-disable-next-line
            console.log("Document written with ID: ", docRef.id);

            store.commit('FB_SET_TOTAL', store.state.total ++)
            store.commit('SET_PAGE', 1)
            totalSnapshot = undefined

        })
        .catch(function(error) {
            // eslint-disable-next-line
            console.error("Error adding document: ", error);
        });
    },
    TASK_MODIFY (store, task) {
        db.collection('todos').doc(task.id).set(task)
    },
    TASK_REMOVE (store, taskid) {
        db.collection("todos").doc(taskid).delete().then(function() {
            // eslint-disable-next-line
            console.log("Document successfully deleted!");
            store.commit('FB_SET_TOTAL', store.state.total --)
            totalSnapshot = undefined
        }).catch(function(error) {
            // eslint-disable-next-line
            console.error("Error removing document: ", error);
        });
    },
    SET_DETAIL_TASKID (store, taskid) {
        store.state.loaders.pageLoading = true
        db.collection("todos").doc(taskid).get().then(function(doc) {
            if (doc.exists) {
                // eslint-disable-next-line
                console.log("Document data:", doc.data())

                store.state.detailed_task = doc.data()
            } else {
                // eslint-disable-next-line
                console.log("No such document!")
            }

            store.state.loaders.pageLoading = false
        }).catch(function(error) {
            // eslint-disable-next-line
            console.error("Error removing document: ", error);

            store.state.loaders.pageLoading = false
        });
    }
}


export default (store) => {
    store.subscribe(mutation => {
        if(mutations[mutation.type])
            mutations[mutation.type](store, mutation.payload)
    })
}