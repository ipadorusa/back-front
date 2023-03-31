import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'
import { AboutList } from '@/src/components/organism'
import { fetchPosts } from '@src/hooks'

export default function Page() {
  const { ...props } = useQuery({
    queryKey: ['about', 10],
    queryFn: () => fetchPosts(10)
  })
  return <AboutList props={props} />
}

export async function getServerSideProps() {
  const queryClient = new QueryClient({
    staleTime: 60 * 1000
  })

  await queryClient.prefetchQuery({ queryKey: ['about', 10], queryFn: () => fetchPosts(10) })

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
