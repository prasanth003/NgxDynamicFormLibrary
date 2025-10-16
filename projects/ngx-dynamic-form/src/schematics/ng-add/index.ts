import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

interface Schema {
  theme: 'bootstrap' | 'material' | 'antd';
}

export function ngAdd(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const themePackageMap = {
      bootstrap: '@prasanthsekar003/ngx-dynamic-form-bootstrap',
      material: '@prasanthsekar003/ngx-dynamic-form-material',
      antd: '@prasanthsekar003/ngx-dynamic-form-antd'
    };

    const pkgPath = '/package.json';
    const pkg = tree.exists(pkgPath)
      ? JSON.parse(tree.read(pkgPath)!.toString('utf-8'))
      : { dependencies: {} };

    // Ensure core dependency is added
    pkg.dependencies['@prasanthsekar003/ngx-dynamic-form'] = '^1.0.0';
    // Add selected theme
    pkg.dependencies[themePackageMap[options.theme]] = '^1.0.0';

    tree.overwrite(pkgPath, JSON.stringify(pkg, null, 2));

    // Run npm install after modifying package.json
    context.addTask(new NodePackageInstallTask());

    context.logger.info('');
    context.logger.info(`🎨 Installed @prasanthsekar003/ngx-dynamic-form with ${options.theme} theme.`);
    context.logger.info(`➡️  Add provideDynamicFormTheme({ theme: "${options.theme}" }) to your app config.`);
    context.logger.info('');
    return tree;
  };
}