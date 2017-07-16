import Application from '@glimmer/application';
import Resolver, { BasicModuleRegistry } from '@glimmer/resolver';
import moduleMap from '../config/module-map';
import resolverConfiguration from '../config/resolver-configuration';
export default class App extends Application {
    constructor() {
        let moduleRegistry = new BasicModuleRegistry(moduleMap);
        let resolver = new Resolver(resolverConfiguration, moduleRegistry);
        super({
            rootName: resolverConfiguration.app.rootName,
            resolver
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxRQUFRLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xFLE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8scUJBQXFCLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsTUFBTSxDQUFDLE9BQU8sVUFBVyxTQUFRLFdBQVc7SUFDMUM7UUFDRSxJQUFJLGNBQWMsR0FBRyxJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRW5FLEtBQUssQ0FBQztZQUNKLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUTtZQUM1QyxRQUFRO1NBQ1QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJ0BnbGltbWVyL2FwcGxpY2F0aW9uJztcbmltcG9ydCBSZXNvbHZlciwgeyBCYXNpY01vZHVsZVJlZ2lzdHJ5IH0gZnJvbSAnQGdsaW1tZXIvcmVzb2x2ZXInO1xuaW1wb3J0IG1vZHVsZU1hcCBmcm9tICcuLi9jb25maWcvbW9kdWxlLW1hcCc7XG5pbXBvcnQgcmVzb2x2ZXJDb25maWd1cmF0aW9uIGZyb20gJy4uL2NvbmZpZy9yZXNvbHZlci1jb25maWd1cmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQXBwbGljYXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgbW9kdWxlUmVnaXN0cnkgPSBuZXcgQmFzaWNNb2R1bGVSZWdpc3RyeShtb2R1bGVNYXApO1xuICAgIGxldCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihyZXNvbHZlckNvbmZpZ3VyYXRpb24sIG1vZHVsZVJlZ2lzdHJ5KTtcblxuICAgIHN1cGVyKHtcbiAgICAgIHJvb3ROYW1lOiByZXNvbHZlckNvbmZpZ3VyYXRpb24uYXBwLnJvb3ROYW1lLFxuICAgICAgcmVzb2x2ZXJcbiAgICB9KTtcbiAgfVxufVxuIl19