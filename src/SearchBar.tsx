import React from "react";

export default function SearchBar() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Suche nach Restaurants" />
                <input type="text" placeholder="In welcher Stadt?" />
            </div>
            <input type="submit" value="Suchen" />
        </form>
    );
}
