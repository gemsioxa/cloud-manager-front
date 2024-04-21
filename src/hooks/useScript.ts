const useScript = async (url: string) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;

        script.onload = () => {
            resolve(script);
        };
        script.onerror = () => {
            reject(new Error(`Ошибка загрузки скрипта ${url}`));
        };

        document.head.append(script);
      });
};

export default useScript;
