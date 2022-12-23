import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY, image_server, server } from '../constants/constants'
import { Card, Spin } from 'antd';
import '../styles/movie-list.css';
import { Typography } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

export default function MovieList() {
    const [upcomingMovies, setUpcomingMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    async function getMovies() {
        setIsLoading(true)
        try {
            const reponse = await axios.get(`${server}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            const data = reponse.data
            setUpcomingMovies(data.results)
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            {isLoading ? <div className='spin-container'><Spin size="large" /></div> :
                <div className='movie-card-container'>
                    <Title level={3} style={{color: "white"}}>Up Coming Movies</Title>
                    <div className='movie-card-grid'>
                        {upcomingMovies.map(item => (
                            <Card
                                key={item.id}
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="movie" src={`${image_server}/t/p/w500${item.poster_path}`} />}
                            >
                                <Meta title={item.original_title} description={item.release_date} />
                            </Card>
                        ))}
                    </div>
                </div>}
        </div>
    )
}
