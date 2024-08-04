/* NQUEENS */
// Number of ways. O(1)
// q(n) = n^4 / 2  − 5n^3 / 3 +3n^2 / 2 − n / 3

// https://leetcode.com/problems/n-queens/

function isSafe(col,row,n,board){
    let dupCol = col;
    let dupRow = row;

    while(row>=0 && col >= 0){
        if(board[row][col]=='Q') return false;
        row--;
        col--;
    }
    
    row = dupRow;
    col = dupCol;

    while(col>=0 ){
        if(board[row][col]=="Q") return false;
        col--;
    }


    row = dupRow;
    col = dupCol;

    while(row<n && col >= 0){
        if(board[row][col]=="Q") return false;
        row++;
        col--;
    }
    
    
    return true;
}


function solve(col,n,board,ans){
    if(col==n){
 const copy = board.map(row => row.join(''));
        ans.push(copy);
        return;
    }
    for(let row=0;row<n;row++){
        if(isSafe(col,row,n,board)){
            board[row][col]='Q';
            solve(col+1,n,board,ans);
            board[row][col]='.';
        }
    }
}

var solveNQueens = function(n) {
    let board = new Array(n).fill(0).map(() => new Array(n).fill('.'));

    let ans = [];
    solve(0,n,board,ans);

    return ans;
};