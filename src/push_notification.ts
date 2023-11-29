import messaging from '@react-native-firebase/messaging';

let fcmToken:any = null;

export async function requestUserPermission() {
  console.log("######################################")
  console.log("######################################")
  console.log(":D")
  console.log("######################################")
  try {
    const authStatus = await messaging().requestPermission();
    console.log(authStatus,"[AUTH]")
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
      getToken();
    }
  } catch (error) {
    console.log(error,"[ERRO]")
  }
}

const getToken = async () => {
  try {
    if(!fcmToken) {
        fcmToken = await messaging().getToken();
        console.log(fcmToken, '[TOKEN_FIREBASE]');
    }
  } catch (error) {
    console.log(error, '[ERROR_GET_TOKEN]');
  }
};
