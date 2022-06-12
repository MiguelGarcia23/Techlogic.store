const props = {
    inputFile: document.getElementById('image'),
    profileImage: document.getElementById('profileImage'),
}

const methods = {

    listen: () => {

        props.inputFile.addEventListener('change', methods.action)

    },   

    action: () => {

        const filesInputFile = props.inputFile.files;

        if (!filesInputFile || !filesInputFile.length) {

            props.profileImage.src = '';
            return;
        }

        const firstFile = filesInputFile[0];

        const objectURL = URL.createObjectURL(firstFile);

        props.profileImage.src = objectURL;
    }
}

methods.listen();