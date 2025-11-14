import NavLink from '@/Components/NavLink';
import {
    IconBook,
    IconBuildingSkyscraper,
    IconCalendar,
    IconCalendarTime,
    IconCircleKey,
    IconDoor,
    IconDroplets,
    IconLayout2,
    IconLogout2,
    IconMoneybag,
    IconSchool,
    IconUser,
    IconUsersGroup,
} from '@tabler/icons-react';

export default function SidebarResponsive({ url, auth }) {
    return (
        <nav className="mt-4 flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col">
                <div className="px-3 py-2 text-xs font-medium text-white">Lainnya</div>
                <NavLink
                    url={route('logout')}
                    method="post"
                    as="button"
                    active={url.startsWith('/admin/logout')}
                    title={'Logout'}
                    icon={IconLogout2}
                />
            </ul>
        </nav>
    );
}