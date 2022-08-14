const props = {
    inputFile: document.getElementById('image'),
    profileImage: document.getElementById('productImage'),
}

const methods = {

    listen: () => {

        props.inputFile.addEventListener('change', methods.action)

    },   

    action: () => {

        const filesInputFile = props.inputFile.files;

        props.profileImage.src = '';

        const firstFile = filesInputFile[0];

        const objectURL = URL.createObjectURL(firstFile);

        props.profileImage.src = objectURL;
    }
}

methods.listen();