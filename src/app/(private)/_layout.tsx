import { Slot } from 'expo-router'

import Sidebar from '../../modules/sidebar'
import Header from '../../components/header'

export default function PrivateLayout() {
  return (
    <Sidebar.Root>
      <Header />

      {/* conteudo da sidebar */}
      <Sidebar.Content>
        <Sidebar.Header>
          <Sidebar.Title>Menu</Sidebar.Title>
        </Sidebar.Header>

        <Sidebar.Body>
          <Sidebar.Nav>
            {/* dia a dia */}
            <Sidebar.Section title="Dia a Dia">
              <Sidebar.Item
                icon="calendar-alt"
                label="Agendamentos"
                href="/(private)/appointments"
                badge="3"
              />

              <Sidebar.Item icon="users" label="Clientes" href="/(private)/clients" />

              <Sidebar.Item icon="cut" label="Serviços" href="/(private)/services" />
            </Sidebar.Section>

            {/* seçao financeiro */}
            <Sidebar.Section title="Financeiro">
              <Sidebar.Item icon="dollar-sign" label="Vendas" href="/(private)/sales" />
              <Sidebar.Item icon="chart-bar" label="Relatórios" href="/(private)/reports" />
            </Sidebar.Section>

            {/* configuraçoes */}
            <Sidebar.Section title="Configurações">
              <Sidebar.Item icon="cog" label="Ajustes" href="/(private)/settings" />
            </Sidebar.Section>
          </Sidebar.Nav>
        </Sidebar.Body>
      </Sidebar.Content>

      <Slot />
    </Sidebar.Root>
  )
}
