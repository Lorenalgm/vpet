import firebaseRef from './functions/FirebaseService'

const { auth, database } = firebaseRef

test('Teste de conectividade com Firebase Realtime DB', () => {
    expect(firebaseRef).toEqual({ auth, database })
})