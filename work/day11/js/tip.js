/**
 * 自定义 title 提示组件
 */
window.addEventListener("load", function(){
    (function() {

        // 创建一个div
        var div = document.createElement("div");

        // 设置 title 提示框的样式
        div.style.position = "absolute";
        div.style.width = "200px";
        div.style.padding = "10px";
        div.style.border = "1px solid #333";
        div.style.backgroundColor = "rgba(0,0,0, .5)";
        div.style.font = "14px/1.5 微软雅黑";
        div.style.color = "#fff";
        div.style.display = "none";

        // 将 title 提示框 插入到 body 末尾
        document.body.appendChild(div);

        // 查找需要显示提示框的元素
        var tipNodes = document.querySelectorAll("[title]");

        // 给每一个对象绑定事件
            for (var i = 0; i < tipNodes.length; i++) {
                var tipNode = tipNodes[i];

            // 保存 title 内容
            var title;

            // 绑定鼠标移入(悬停)事件
            tipNode.onmouseover = function(event) {
                // 获取元素的 title 属性值
                title = this.title;
                // 将 title 内容插入到 自定义提示组件中
                div.innerText = title;
                // 移除元素的 title 属性
                this.removeAttribute("title");

                // 定位组件
                event = event || window.event;
                // 获取滚动条的滚动距离
                var ol = document.body.scrollLeft || document.documentElement.scrollLeft;
                var ot = document.body.scrollTop || document.documentElement.scrollTop;
                // 获取提示组件在页面中的绝对位置 = 鼠标的坐标 + 获取滚动条的滚动距离
                var left = event.clientX + ol + "px";
                var top = event.clientY + ot + 20 + "px";
                // 设置 提示组件的 绝对位置
                div.style.left = left;
                div.style.top = top;

                // 显示提示组件
                div.style.display = "block";
            }

            // 绑定鼠标移出事件
            tipNode.onmouseout = function() {
                // 给 元素插入 title 属性
                this.title = title;
                // 隐藏提示组件
                div.style.display = "none";
            }
        }
    })();
}, false);