import { Navbar, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from './components/navbar';
import { Sidebar } from './components/sidebar';
import { StackedLayout } from './components/stacked-layout';
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem, DropdownLabel } from './components/dropdown';
import { ChevronDownIcon } from '@heroicons/react/16/solid';

export function AppLayout({ children }) {
  return (
    <StackedLayout
      navbar={
        <Navbar>
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <NavbarLabel>🌐 Language</NavbarLabel>
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu>
                <DropdownItem>
                  <DropdownLabel>🇬🇧 English</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>🇷🇺 Russian</DropdownLabel>
                </DropdownItem>
                <DropdownItem>
                  <DropdownLabel>🇺🇦 Ukrainian</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
          <NavbarSpacer />
        </Navbar>
      }
      sidebar={<Sidebar>{/* Your sidebar content */}</Sidebar>}
    >
      {children}
      {/* Your page content */}
    </StackedLayout>
  );
}
