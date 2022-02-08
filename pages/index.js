import { Box, Text, TextField, Image } from '@skynexui/components';
import { Button, Title, Label} from '../components'
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function PaginaInicial() {
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();
    const [disableBtn, setDisableBtn] = React.useState(true);

    const handleOnChange = (event) => {
      (event.target.value.length >= 3) ? setDisableBtn(false) : setDisableBtn(true);
      setUsername(event.target.value);
    }

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Form */}
            <Box
              as="form"
              onSubmit={ (event) => {
                  event.preventDefault();
                  roteamento.push(`/chat?username=${username}`)
                }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title
                tag='h1'
                theme={appConfig.theme}
                >
                  Boas vindas de volta!
              </Title>
              
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>

              <Label
              theme={appConfig.theme}
              >Insira seu nome de usuário do GitHub</Label>
              
              <TextField
                value={username}
                // onChange={(event) => {
                //      handleOnChange(event)
                // }}
                onChange={handleOnChange} // <== iSSO FUNCIONA IGUAL AS 3 LINHAS ACIMA,
              
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button 
                type='submit'
                label='Entrar'
                disabled={disableBtn}
                fullWidth
                theme={appConfig.theme}
                data-js='nath'
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
              >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }