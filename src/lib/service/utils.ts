const getData = async (url: string) => {
    // const path = 'http://localhost:8000/';
    const path = 'https://raw.githubusercontent.com/GibreelAbdullah/islam-science-api/refs/heads/master'
    try {
        const response = await fetch(path + url);
        const data = await response.text();
        return data;
    } catch (error) {
        return { type: "text", data: '<div class="text-center text-5xl"><p>Error 404</p><p class="text-2xl">Page Not Found</p><div>' };
    }
};

export default getData;