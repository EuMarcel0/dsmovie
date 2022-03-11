import Pagination from 'components/pagination';
import MovieCard from 'components/moviecards';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';

function Listing() {
    
    // FORMA ERRADA
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response =>{
            console.log(response.data);
        
        });


    return (
        <>
            <Pagination />

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>
            </div>


        </>

    );
}

export default Listing;