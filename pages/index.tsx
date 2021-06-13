import { useState } from 'react';

import Head from 'next/head'

import axios from 'axios';

import { Grid, } from '@material-ui/core'



import CardUser from './../components/cardUser/CardUser';
import PaginationPage from './../components/paginationPage/PaginationPage';
import DisPlayuser from './../components/disPlayuser/DisPlayuser';
import CountDisplyUser from './../components/countDisplyUser/CountDisplyUser';

type dataUser = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

type DataEnter = {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: dataUser[]
  support: {
    url: string
    text: string
  }
}



export default function Home(props: any): JSX.Element {


  const [data, setData] = useState<DataEnter>(props.datapage)

  const [disabledpaginton, setDisabledpaginton] = useState<boolean>(false);


  const [displayitem, setDisplayitem] = useState(1);


  const dataFetchin = async (page: number, per_page: number) => {
    try {
      const res = await axios.get('https://reqres.in/api/users', {
        params: {
          page,
          per_page
        }
      })
      const dataRes = res.data
      setData(dataRes)
      setDisabledpaginton(false)

    } catch (error) {

    }
  }

  const handelPagination = (a: any, number: number): void => {

    setDisabledpaginton(true)
    dataFetchin(number, data.per_page)

  }

  const handelShowitem = (value: number): void => setDisplayitem(value)



  const handleCountDisply = (event: any): void => {
    dataFetchin(data.page, parseInt(event.target.value))
  }


  return (
    <div style={{ marginTop: '60px' }} >
      <Head>
        <title>user App</title>
        <meta name="description" content="user App app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid container spacing={3} style={{ margin: '20px 0px' }} direction="row" justify="center" alignItems="center"  >
          <Grid item lg={6} sm={6} md={6} xs={6} >
            <DisPlayuser handelShowitem={handelShowitem} />
          </Grid>
          <Grid item lg={6} sm={6} md={6} xs={6} >
            <CountDisplyUser handleCountDisply={handleCountDisply} value={data.per_page} />
          </Grid>
        </Grid>
        <section>
          <Grid container spacing={3}>
            {
              data.data.length > 0 ?
                data.data.map((item: dataUser) => <CardUser key={item.id.toString()} dispaly={displayitem} userData={item} />)
                : <h1>No users found</h1>
            }

          </Grid>
        </section>
        < PaginationPage count={data.total_pages} handelPagination={handelPagination} disabled={disabledpaginton} />
      </main>
    </div>
  )
}
export async function getServerSideProps() {

  let datapage: DataEnter | {} = {}
  try {
    const res = await axios.get('https://reqres.in/api/users', {
      params: {
        page: 1
      }
    })

    const dataRes = await res.data
    datapage = dataRes
  } catch (error) {

  }

  return {
    props: { datapage },
  }
}