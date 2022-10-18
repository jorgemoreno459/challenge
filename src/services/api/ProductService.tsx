import HttpService from '../HttpService';

class ProductService {

    getProductDetailById(id:string) {
        return HttpService().get(
            `items/${id}`
        );
    }

    getDescriptionProductDetailById(id:string) {
        return HttpService().get(
            `items/${id}/description`
        );
    }

    getResultSearchList(text:string) {
        return HttpService().get(
            `sites/MLA/search?q=${text}`
        );
    }

}

export default new ProductService();