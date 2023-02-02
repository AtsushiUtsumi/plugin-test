import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "plugin-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('plugin-test.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from plugin-test!');
	});

	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('plugin-test.helloWorld2', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World2 from plugin-test!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
