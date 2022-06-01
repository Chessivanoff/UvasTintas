
import AlamosMalbecDetail from '../Components/AlamosMalbecDetail';


export const getProduct = (id) => {
    return new Promise ((resolve, reject ) => {
        setTimeout (
            () => resolve(AlamosMalbecDetail), 3000);
    });
};