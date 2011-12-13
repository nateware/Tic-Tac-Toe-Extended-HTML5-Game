/*
Copyright 2011 Saiyasodharan (http://saiy2k.blogspot.com/)

This file is part of the open source game, Tic Tac Toe Extended (https://github.com/saiy2k/Tic-Tac-Toe-Extended-HTML5-Game)

Tic Tac Toe Extended is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Tic Tac Toe Extended is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Tic Tac Toe Extended.  If not, see <http://www.gnu.org/licenses/>.
*/

ZicZacZoe.FBWrapper	=	function() {
	
	/** @scope ZicZacZoe.FBWrapper */
	return {
		
		/** name of the player in FB
			@type	String */
		userName		:	"",
		
		/** inits FB Wrapper class */
		init			:	function() {
								FB.getLoginStatus(function (response) {
									if (response.authResponse) {
										FB.api('/me', function(response) {
											ZicZacZoe.FBWrapper.userName	=	response.name;
										});
									} else {
										
									}
								});
							},
							
		shareAIWinText	:	function() {
								var				string;
								string		=	ZicZacZoe.FBWrapper.userName + " won the game against AI in " + (ZicZacZoe.GameState.p1ElapsedTime/1000.0) + " seconds";
								
								FB.ui({
									method: 'feed',
									name: 'Tic Tac Toe Extended',
									link: 'http://www.gethugames.in/tictactoe/',
									picture: 'http://www.gethugames.in/tictactoe/images/icon128.png',
									caption: 'Won the game',
									description: string
								},
								function(response) {
								});
							}
	};
}();		