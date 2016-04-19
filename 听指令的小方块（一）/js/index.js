/**
 * Created by tzr4032369 on 2016/4/19.
 */


//添加执行命令事件
document.getElementById('run').onclick = function(){
    var text = document.getElementById('order').value;
    runCommand(text);
}

//执行命令
function runCommand(text){
    var order = text.toLowerCase(); //兼容大小写
    switch(order){
        case 'go':
           switch(active.direction){
               case 0:
                   if(active.row ==1){return;}
                   active.disappear();
                   active.row--;
                   active.show();
                   break;
               case 1:
                   if(active.col ==1){return;}
                   active.disappear();
                   active.col--;
                   active.show();
                   break;
               case 2:
                   if(active.row ==10){return;}
                   active.disappear();
                   active.row++;
                   active.show();
                   break;
               case 3:
                   if(active.col ==10){return;}
                   active.disappear();
                   active.col++;
                   active.show();
                   break;
               default :

           }
            break;
        case 'tun lef':
            active.turn(1);
            break;
        case 'tun rig':
            active.turn(3);
            break;
        case  'tun bac':
            active.turn(2);
            break;
        default :
    }
}

//活动节点activeNode
function activeNode(row,col){
    this.row = row;  //行
    this.col = col;  //列
    this.direction = 0;  //0：上 1：左 2：下 3：右
    //获取当前活动节点DOM
    this.getDom = function(){
        return document.getElementsByTagName('td')[this.row*11+this.col];
    }
}

//显示活动节点
activeNode.prototype.show = function(){
    var innerDom = document.createElement('div');
    innerDom.style.width = '100%';
    innerDom.style.height = '100%';
    innerDom.style.backgroundColor = '#00aaaa';
    innerDom.style.borderTop = '20px solid #bb66bb';
    innerDom.style.transform = "rotate(-"+this.direction*90+"deg)";
    this.getDom().appendChild(innerDom);

}

//消失活动节点
activeNode.prototype.disappear = function(){
    this.getDom().removeChild(this.getDom().firstChild);
}

//旋转活动节点
/*param:
    directionNum:旋转方向
*/
activeNode.prototype.turn = function(directionNum){
    var newDirection =this.direction+directionNum;
    this.getDom().firstChild.style.transform = "rotate(-"+newDirection*90+"deg)";
    this.direction = (this.direction+directionNum)%4;  //更新节点当前方向
}

//实例化活动节点
var active = new activeNode(5,6);
active.show();