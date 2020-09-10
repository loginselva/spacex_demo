export const services = {
    getDataServices
}

function getDataServices(year, launch, landed) {
    const requestOptions = {
        method: 'GET',
    };

    let urlString = ''
    if (year != 0)
        urlString += '&launch_year=' + year
    if (launch != 0)
        urlString += '&launch_success=' + launch
    if (landed != 0)
        urlString += '&land_success=' + landed

    return new Promise((resolve, reject) => {
        fetch(`https://api.spacexdata.com/v3/launches?limit=100${urlString}`, requestOptions).then(res => {
            res.text().then(text => { let data = text && JSON.parse(text); resolve(data); })
        })
    })
}