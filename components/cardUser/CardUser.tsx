import { Grid, Paper } from '@material-ui/core'

import style from './cardUser.module.scss'

type propsCheck = {
    userData?: {
        id: number
        email: string
        first_name: string
        last_name: string
        avatar: string
    }
    dispaly: number
}

export default function CardUser({ userData, dispaly }: propsCheck): JSX.Element {


    return (
        <>
            {
                dispaly === 1 ?
                    <Grid item xs={12} sm={6} md={4} lg={4} >

                        {
                            userData?.avatar ?
                                <Paper className={style.boxrow} >
                                    <img src={userData.avatar} alt={userData.first_name} width='75' height='75' loading='lazy' className='lazy' />
                                    <h2>
                                        {userData.first_name} {userData.last_name}
                                    </h2>
                                    <br />
                                    <p>{userData.email}</p>
                                </Paper>
                                : null
                        }
                    </Grid>
                    :
                    <Grid item xs={12} sm={12} md={12} lg={12} >
                        {
                            userData?.avatar ?

                                <Paper className={style.boxcolumn} >

                                    <Grid item xs={4} sm={4} md={4} lg={4} className={style.boxImge} >

                                        <img src={userData.avatar} alt={userData.first_name} width='75' height='75' loading='lazy' className='lazy' />
                                    </Grid>
                                    <Grid item xs={8} sm={8} md={8} lg={8} className={style.boxdescription} >
                                        <h2>
                                            {userData.first_name} {userData.last_name}
                                        </h2>
                                        <br />
                                        <p>{userData.email}</p>
                                    </Grid>

                                </Paper>
                                : null
                        }

                    </Grid>
            }


        </>
    )
}
