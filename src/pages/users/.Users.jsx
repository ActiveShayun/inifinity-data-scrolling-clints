import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../api/api';
import Card from '../../componets/userCard/Card';
import { useEffect } from 'react';
import Loader from '../../componets/loader/Loader';
import Error from '../../componets/Err/Error';



const Users = () => {
    const { data: allUsers = [], hasNextPage, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
        getNextPageParam: (lastPage, allPage) => {
            console.log('allPage', lastPage, allPage);
            return lastPage?.length === 10 ? allPage?.length + 1 : undefined
        }

    })

    const handleScroll = () => {
        const bottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 1

        if (bottom && hasNextPage) {
            fetchNextPage()
        }
    }

    if (status === 'loading') return <Loader />
    if (status === 'error') return <Error />

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => removeEventListener('scroll', handleScroll)
    }, [hasNextPage])

    console.log('all data', allUsers?.pages);
    return (
        <div className='py-10'>
            <h1 className='text-4xl font-bold text-center'>All Users</h1>
            <div>
                {allUsers?.pages?.map((users,index) =>
                    <div key={index} className='grid grid-cols-1 lg:grid-cols-4 gap-4 py-8'>
                        {
                            users?.map(user => {
                                return <Card key={user._id} user={user} />
                            })}
                    </div>)}
            </div>

            {isFetchingNextPage && <Loader />}
        </div >
    )
};

export default Users;