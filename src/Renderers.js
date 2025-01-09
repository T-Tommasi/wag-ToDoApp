export function retrieveFolders(title) {
    let extractedData = localStorage.getItem(title);
    let translatedData = JSON.parse(extractedData);
    return translatedData;
};

