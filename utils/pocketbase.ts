
import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');


// after the above you can also access the auth data from the authStore
// console.log(pb.authStore.isValid);
// console.log(pb.authStore.token);
// console.log(pb.authStore.model.id);

// "logout" the last authenticated model
// pb.authStore.clear();
