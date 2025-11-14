import NavLink from '@/Components/NavLink';
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/ui/avatar';
import { Link } from '@inertiajs/react';
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

export default function Sidebar({ url, auth }) {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col">
                <li className="-mx-6">
                    <Link
                        href={'#'}
                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-800"
                    >
                        <Avatar>
                            <AvatarImage />
                            <AvatarFallback>J</AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col text-left">
                            <span className="truncate font-bold">jhon doe</span>
                            <span className="truncate">jhon doe</span>
                        </div>
                    </Link>
                </li>

                <div className="px-3 py-2 text-xs font-medium text-white">Lainnya</div>
                <NavLink
                    url={route('logout')}
                    method="post"
                    as="button"
                    active={url.startsWith('/logout')}
                    title={'Logout'}
                    icon={IconLogout2}
                />
            </ul>
        </nav>
    );
}