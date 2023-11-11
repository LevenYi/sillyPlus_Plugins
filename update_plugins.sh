#!/bin/bash

# 将本文件保存到傻+执行文件同级目录内，然后执行本文件: bash update_plugins.sh 


# 定义目录
a_dir=$(mktemp -d)
b_dir="./plugins" 

# 克隆仓库到临时目录
git clone https://github.com/LevenYi/sillyPlus_Plugins $a_dir

# 删除b目录下和a目录同名的文件/目录
for item in $a_dir/*
do
  filename=$(basename "$item")
  if [ -e "$b_dir/$filename" ]; then
    rm -rf "$b_dir/$filename"
  fi
done

# 移动文件
mv $a_dir/* $b_dir/

# 删除临时目录
rm -rf $a_dir