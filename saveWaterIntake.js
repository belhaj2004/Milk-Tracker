import { auth, database } from './firebase';

const saveWaterIntake = (date, intake) => {
    const user = auth.currentUser;
    if (!user) {
      console.log('User not logged in.');
      return;
    }
    const userId = user.uid;
    const userRef = database.ref(`users/${userId}`);
    userRef
      .child(date)
      .set(intake)
      .catch((error) => {
        console.log(`Failed to save water intake for date ${date}: ${error.message}`);
      });
  };
  