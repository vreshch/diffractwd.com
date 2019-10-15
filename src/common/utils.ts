export function getMetaDataFromState({route, params = {}, query = {}}) {
    let title = "";
    // 'news.html' && '/news.html' is OK
    let mroute = "";
    if (route && route.length) {
        mroute = (route[0] === "/") ? route.slice(1) : route;
    }

    switch (mroute) {
        case 'news.html':
            title = 'DiffractWD - Software News';
            break;
        case 'about.html':
            title = 'DiffractWD - Software About';
            break;
        case 'screenshots.html':
            title = 'DiffractWD - Software Screenshots';
            break;
        case 'downloads.html':
            title = 'DiffractWD - Software Downloads';
            break;
        case 'quick_manual.html':
            title = 'DiffractWD - Software Quick Manual';
            break;
        case 'support.html':
            title = 'DiffractWD - Software Support';
            break;
        case 'license.html':
            title = 'DiffractWD - Software License';
            break;
        default:
            title = 'DiffractWD - Software for Powder Diffraction Manipulation';
    };

    return {
        title: title,
        description: 'DiffractWD - Free Open Source Software for Powder Diffraction Manipulation'
    };
}
