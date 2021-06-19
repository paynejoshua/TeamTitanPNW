import bcrypt from "bcryptjs"

function PasswordHash(password) {

    return new Promise((resolve, reject) => {

        bcrypt.hash(password, 13, function (err, hash) {
            if (err) {
                reject(err)
            }
            else {
                resolve(hash)
            }
        });



    });

}

export default PasswordHash