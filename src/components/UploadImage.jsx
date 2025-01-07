import React, { useState } from 'react'

const UploadImage = () => {
    const [Image, setImage] = useState()
    const changeHandler = (e) => {
        const file = e.target.files[0]
        setImage(URL.createObjectURL(file));
    }

    return (
        <div className='pt-10'>
            <input accept='image/*' onChange={changeHandler} type="file" id='this' hidden multiple />
            <label htmlFor="this" className='cursor-pointer ms-10 mt-10 px-2 py-1 bg-blue-950 text-white rounded-lg'>upload</label>
            {Image && <img className='max-w-40' src={Image} alt="img" />}

        </div>
    )
}

export default UploadImage
// import React, { useState } from 'react'

// const UploadImage = () => {
//     const [Image, setImage] = useState()

//     const changeHandler = (e) => {
//         const file = e.target.files[0]
//         setImage(URL.createObjectURL(file))
//     }
//     return (
//         <div>
//             <input onChange={changeHandler} type="file" id='this' hidden />
//             <label htmlFor="this"> upload btn </label>
//             {Image && <img src={Image} alt="img" />}
//         </div>
//     )
// }

// export default UploadImage