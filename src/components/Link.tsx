interface LinkProps {
    title: string;
    href: string;
    icon?: string;
}

export default function Link({ title, href, icon}: LinkProps) {
    return (
        <a href={href} className="text-sm bg-primary-50 dark:bg-secondary-50 rounded-md px-4 py-2 drop-shadow-lg hover:scale-105 duration-75">
            {
                icon &&
                <div>
                    <img src={icon} alt="link-icon" />
                </div>
            }
            <span>
             {title}   
            </span>
        </a>
    )
}