export default function SideMenu() {
    return (
        <aside className="bg-light border rounded-3 p-3 position-sticky" style={{top:'1rem'}}>
            <h5 className="mb-3">Menu</h5>
            <nav className="nav flex-column">
                <a href="#" className="nav-link px-0">First point</a>
                <a href="#" className="nav-link px-0">Second point</a>
                <a href="#" className="nav-link px-0">Third point</a>
                <a href="#" className="nav-link px-0">Fours point</a>
            </nav>
        </aside>
    );
}

