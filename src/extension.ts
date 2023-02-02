import { stringify } from 'querystring';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "plugin-test" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('plugin-test.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const message = String(vscode.workspace.isTrusted);
		vscode.window.showInformationMessage(message);
	});

	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('plugin-test.helloWorld2', () => {
		vscode.window.showInformationMessage('Hello World2 from plugin-test!');
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('plugin-test.helloWorld3', () => {
		vscode.window.showInformationMessage('コマンドパレットで検索するのは「title」の方で、「command」を上記で登録する(そりゃそうか)');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
