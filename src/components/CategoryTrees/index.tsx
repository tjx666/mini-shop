import * as React from 'react';
import { Tree } from 'antd';
import { getCategoryTrees } from '../../api/CategoryApi';
import { Category } from '../../models/Category';
import {
    AntTreeNodeSelectedEvent,
    AntTreeNodeCheckedEvent,
} from 'antd/lib/tree';
import './style.scss';
const { TreeNode } = Tree;

export enum CategoryTreesMode {
    WATCH,
    BATCH_DELETE,
}

interface TreeNode {
    key: string;
    title: string;
    children: TreeNode[];
}

const mapCategoryTreesToTreeData = (categoryTrees: Category[]): TreeNode[] => {
    return categoryTrees.map(tree => {
        return {
            key: `${tree.id}`,
            title: tree.name,
            children: mapCategoryTreesToTreeData(tree.children),
        };
    });
};

interface CategoryTreesProps {
    mode: CategoryTreesMode;
}

export const CategoryTrees = ({
    mode = CategoryTreesMode.WATCH,
}: CategoryTreesProps) => {
    const [treeData, setTreeData] = React.useState<TreeNode[]>([]);
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([]);
    const [checkedKeys, setCheckedKeys] = React.useState<string[]>([]);

    const handleSelect = (
        selectedKeys: string[],
        event: AntTreeNodeSelectedEvent
    ) => {};

    const handleCheck = (
        checkedKeys: string[] | any,
        event: AntTreeNodeCheckedEvent
    ) => {
        console.log({ checkedKeys });
        setSelectedKeys([...selectedKeys, checkedKeys]);
    };

    React.useEffect(() => {
        getCategoryTrees().then(response => {
            const treeData = mapCategoryTreesToTreeData(response.data.data);
            setTreeData(treeData);
        });
    }, []);

    const renderTreeNodes = (treeData: TreeNode[]) => {
        return treeData.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    };

    return (
        <Tree
            className="category-trees"
            checkable={mode === CategoryTreesMode.BATCH_DELETE}
            selectedKeys={selectedKeys}
            checkedKeys={checkedKeys}
            onSelect={handleSelect}
            onCheck={handleCheck}
        >
            {renderTreeNodes(treeData)}
        </Tree>
    );
};
