import React from "react";
import api from "../../api/index"

function ImageUpload(props) {

    const uploadPhoto = async (e) => {
        const file = e.target.files[0]
        const base64 = convertBase64(file).then(image => {
            updateDatabase(image)

        })
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result)
            }

            fileReader.onerror = (error) => {
                reject(error);
            }

        })
    }

    const updateDatabase = (image) => {
        const payload = {
            profilePic: image
        }

        api.updateProfile(props.id, payload)
            .then(res => {
                console.log(res.data.profilePic)
                props.onSaveImage(res.data._id, "")
                props.onSaveImage(res.data._id, res.data.profilePic)

            })
    }


    return (
        <div>
            <input 
            type="file" 
            onChange={(e) => uploadPhoto(e)} 
            />

            <br></br>

        </div>

    )
}

export default ImageUpload