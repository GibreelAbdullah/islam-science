const getData = async (url: string) => {
    const path = 'http://localhost:8000';
    try {
        const response = await fetch(path + url + ".json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        return { type: "text", data: '<div class="text-center text-5xl"><p>Error 404</p><p class="text-2xl">Page Not Found</p><div>' };
    }
};

export default getData;