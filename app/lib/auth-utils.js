/**
 * Return true if use can access to the last route of routes array
 * @param user. User state for the rendering site.
 * @param routes. An array representing this.props.routes. EG:
 * [
 *   {
 *      name: "buildSite"
 *      path: "/build-site"
 *      public: false
 *   }
 * ]
 * @return boolean
 */
export function userHasAccess (user, routes) {
    const route = getLastRoute(routes);
    return {
        hasAccess: route.private ? user && user.isLoggedIn : true
    };
}

/**
 * Get last route object from routes array
 * @param routes
 * @return route
 */
function getLastRoute (routes) {
    return Array.isArray(routes) ? routes[routes.length - 1] : {};
}

export function getUserSiteState (userState) {
    return userState.renderingSite ? userState[userState.renderingSite] : userState['SYB'];
}

export function getSiteName (renderingSite) {
    return renderingSite ? renderingSite : 'SYB';
}