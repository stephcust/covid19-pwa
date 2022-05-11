import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import COUNTRIES from '../../../commons/constants/countries'
// import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import { Card, Typography, Button, Select} from '../../../components'
import { CardPanelContentStyled, ItemStyled, Menuitem, PanelControl } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data;

    const renderCountries = (country, index) => (
        <Menuitem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} />
            </ItemStyled>
        </Menuitem>     
    )

    const textCovid19 = `País: ${country} - Recuperados: ${recovered}`;

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netlify.app/'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    );

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    );

    return (
        <Card>
        <CardPanelContentStyled>
            <PanelControl>
                <Typography variant='h5' component="span" color="primary">COVID19</Typography>
                <Typography variant='h6' component="span">Painel Coronavírus</Typography>
                <Typography variant='body2' component="span" color="primary">Atualizado em: {updateAt}</Typography>
                <div className="pt-2">
                    <Select onChange={onChange} value={country} color='primary'>
                       {COUNTRIES.map(renderCountries)} 
                    </Select>
                </div>
            </PanelControl>
            {navigatorHasShare ? renderShareButton: renderCopyButton}
        </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel);