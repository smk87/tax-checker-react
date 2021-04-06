// Library import
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// File import
import { routes } from 'routes';
import { history } from 'utils/history';

class CustomRouter extends BrowserRouter {
	history = history;
}

export const Router: React.FC = () => (
	<CustomRouter>
		<Suspense fallback={''}>
			<Switch>
				{Object.keys(routes).map((key: string, index: number) => {
					return <Route path={routes[key].path} exact component={routes[key].component} key={index} />;
				})}
			</Switch>
		</Suspense>
	</CustomRouter>
);
