import { environment } from '../environments/environment';

const commonHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

const simulateResponse = () =>
    new Promise((resolve, reject) => {
        resolve({ error: 200, status: false, message: 'this not response' });
        reject({ error: 500, status: false, message: 'this service failed' });
    });

const HttpService = () => {
    const header = { ...commonHeaders };
    return {
        get: (route: string) => {
            return fetch(environment.apiUrl + route, { headers: header })
                .then((response: any) => {
                    if (response && response.ok && response.status === 200) {
                        const responseJson = response.json();
                        return responseJson;
                    } else if (response && !response.ok) {
                        return response.json();
                    } else {
                        return simulateResponse;
                    }
                })
                .catch((error: any) => console.error({ error }));
        },
    };
};

export default HttpService;
