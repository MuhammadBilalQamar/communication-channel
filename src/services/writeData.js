import { ref, set } from "firebase/database";
import { db } from "@config";

const writeUserData = (userId, name, type, email) => {
    set(ref(db, 'users/' + userId), {
        userId,
        username: name,
        email: email,
        type: type,
        // profile_picture: imageUrl
    });
}

export default writeUserData;