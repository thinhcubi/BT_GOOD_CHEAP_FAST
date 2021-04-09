function setSelected(id) {
    let cheapStatus = document.getElementById('Cheap').checked;
    let goodStatus = document.getElementById('Good').checked;
    let fastStatus = document.getElementById('Fast').checked;

    if (id === 'Good') {
        if (cheapStatus && fastStatus) {
            fastStatus = false;
        }
    } else if (id === 'Cheap') {
        if (goodStatus && fastStatus) {
            goodStatus = false;
        }
    } else if (id==="Fast") {
        if (goodStatus && cheapStatus) {
            cheapStatus=false;
        }
    }

    document.getElementById('Cheap').checked = cheapStatus;
    document.getElementById('Good').checked = goodStatus;
    document.getElementById('Fast').checked = fastStatus;
}